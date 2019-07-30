/*

bugs as of 7/30/2019
- doesn't handle constants or decimals anymore

*/

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
    vars
    splits.push( equation.slice( prev ) );
    return differentiate( splits, operand_obj, vars );
}

function differentiate( terms, operand_obj, vars ) {
    terms 
    let res = "";
    let count = 0;
    const operands = Object.values( operand_obj );
    let operand = "";

    terms.forEach( term  => {

        if ( isNaN( term[ 0 ] ) ) {
            term = "1" + term; 
        } else if (!isNaN( term) ) {
            term = term + "^"
        }
        term
        if ( vars.includes( term[ term.length - 1 ] ) ) {
            term = term + "^1";
        } 

        let coeff = term.indexOf( '^' );
        let exp = coeff - 1; 

        coeff = term.slice( 0, exp );
        exp = term.slice( exp + 2, term.length );

        coeff
        exp

        let resCoeff = String( parseFloat( coeff ) * parseFloat( exp ) );
        let resExp = String( parseFloat( exp ) - 1 );

        resCoeff
        resExp
        vars

        if ( count < operands.length ) {
            operand = operands[ count ] + " ";
        }
        else {
            operand = " ";
        } 

        res += resCoeff + vars[ count ] + "^" + `{${ resExp }}` + " " + operand;
        count += 1;  
    
    });

    res
    res = res.replace( /- NaNx\^{NaN}|[\+] NaNx\^{NaN}|NaNx\^{NaN}|\x78\x5E\x7B\x30\x7D|- NaN.\^{NaN}|[\+] NaN.\^{NaN}/g, '' );
    res
    // return UpdateMath( res );
}

standardize("3.5x^3.1 + 6.7y^3");
