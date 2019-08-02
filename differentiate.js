function standardize ( equation ) {
    equation = equation.replace( / /g, '' );
    const operands = [ '*', '-', '+', '/' ];
    let operand_obj = {};
    let vars = [];
    let splits = [];
    let prev = 0;

    for ( i = 0; i < equation.length; i ++ ) {

        if ( operands.includes( equation[ i ] ) ) {
            operand_obj[ i ] = equation[ i ];
            splits.push( equation.slice( prev, i ) );
            prev = i + 1; 
        }

        if ( isNaN( equation[ i ] ) && !operands.includes( equation[ i ] ) && equation[ i ] != '^' && equation[ i ] != '.') {
            vars.push( equation[ i ] );
        }

    }

    splits.push( equation.slice( prev ) );
    return differentiate( splits, operand_obj, vars );
}

function differentiate( terms, operand_obj, vars ) { 
    let res = "";
    let count = 0;
    const operands = Object.values( operand_obj );
    let operand = "";

    terms.forEach( term  => {

        if ( isNaN( term[ 0 ] ) && term[ 0 ] != '.') {
            term = "1" + term; 
        } else if (!isNaN( term) ) {
            term = term + "^";
        } else term = "0" + term;

        if ( vars.includes( term[ term.length - 1 ] ) ) {
            term = term + "^1";
        } 

        let coeff = term.indexOf( '^' );
        let exp = coeff - 1; 

        coeff = term.slice( 0, exp );
        exp = term.slice( exp + 2, term.length );

        let resCoeff = ( parseFloat( coeff ) * parseFloat( exp ) );
        let resExp = ( parseFloat( exp ) - 1 );

        if ( count < operands.length ) {
            operand = operands[ count ] + " ";
        }
        else {
            operand = " ";
        } 

        if ( ! Number.isInteger( resCoeff ) ) {
            resCoeff = resCoeff.toFixed(3);
        } 

        if ( ! Number.isInteger( resExp ) ) {
            resExp = resExp.toFixed(3);
        } 

        res += resCoeff + vars[ count ] + "^" + `{${ resExp }}` + " " + operand;
        count += 1;  
    
    });

    res = res.replace( /- NaNx\^{NaN}|[\+] NaNx\^{NaN}|NaNx\^{NaN}|\x78\x5E\x7B\x30\x7D|- NaN.\^{NaN}|[\+] NaN.\^{NaN}/g, '' );
    UpdateMath( res );
    draw( res );
}

function draw ( expression ) {
    try {
        
      // compile the expression once
      expression = expression.replace( /{|}/g, '' );

      const expr = math.compile( expression );

      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(-10, 10, 0.5).toArray()
      const yValues = xValues.map(function (x) {
        return expr.evaluate({x: x})
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter'
      }
      const data = [trace1]
      Plotly.newPlot('plot', data)
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
}