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

- doesn't handle multivariate polynomials [ squashed 7/30 ]
- doesn't handle negative exponents correctly ( makes entire term NaN^{NaN} )
- if first term is negative returns NaN [ squashed 7/28 ]