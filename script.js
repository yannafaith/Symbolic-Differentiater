/*

pair task: extend the code to handle more complex expression

bugs as of 7/26/2019

- doesn't ignore spaces or other separators besides '+' [ squashed 7/27 ]
- doesn't handle coefficients larger or smaller than one character [ squashed 7/27 ]
- will disregard linear terms unless x is raised to the 1st power [ extended 7/27 ]
- wrong result when exponent is a decimal [ squashed 7/27 ]
- doesn't handle multivariate polynomials [ pending squish ]

bugs as of 7/27/2019

- doesn't handle constants [ squashed 7/28 ]
- doesn't handle multivariate polynomials [ extended 7/28 ]
- if first term is negative returns NaN [ extended 7/28 ]
- doesn't handle negative exponents  [ extended 7/27 ]
- turns coefficient and/or exponent into NaN if either not explicitly = 1 [ squashed 7/27 ]
- if equation is only one term, the first coefficient becomes NaN [ squashed 7/27 ]

bugs as of 7/28/2019 

- doesn't handle multivariate polynomials
- doesn't handle negative exponents correctly ( makes entire term NaN^{NaN} )
- if first term is negative returns NaN [ squashed 7/28 ]

*/

function standardize ( equation ) {
    equation = equation.replace( / /g, '' );
    const operands = [ '*', '-', '+', '/' ];
    let operand_obj = {};
    let splits = [];
    let prev = 0;

    for ( i = 0; i < equation.length; i ++ ) {
        if ( operands.includes( equation[ i ] ) ) {
            operand_obj[ i ] = equation[ i ];
            splits.push( equation.slice( prev, i ) );
            prev = i + 1; 
        }
    }

    splits.push( equation.slice( prev ) );
    return differentiate( splits, operand_obj );

}

function differentiate( terms, operand_obj ) {
    let res = "";
    let count = 0;
    const operands = Object.values( operand_obj );
    let operand = "";

    terms.forEach( term  => {

        if ( isNaN( term[ 0 ] ) ) {
            term = "1" + term; 
        }

        if ( term[ term.length - 1 ] == 'x' ) {
            term = term + "^1";
        } 

        let coeff = term.indexOf( '^' );
        let exp = term.indexOf( 'x' );
        coeff = term.slice( 0, coeff - 1 );
        exp = term.slice( exp + 2, term.length );
        let resCoeff = String( parseFloat( coeff ) * parseFloat( exp ) );
        let resExp = String( parseFloat( exp ) - 1 );

        if ( count < operands.length ) {
            operand = operands[ count ] + " ";
        }
        else {
            operand = " ";
        } 

        res += resCoeff + "x" + "^" + `{${ resExp }}` + " " + operand ;
        count += 1;

    });

    // res
    res = res.replace( /- NaNx\^{NaN}|[\+] NaNx\^{NaN}|NaNx\^{NaN}|\x78\x5E\x7B\x30\x7D/g, '' );
    // res

    return UpdateMath( res );
}

// standardize("-3x^5 - 3x + 5x^5 - 5 + x");

