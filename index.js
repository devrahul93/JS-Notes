// 'Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon'. This string contains big IT companies. Write a function called companiesWithTwoOs check if the company
// has two os are return an array containing the companies.

const companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon'

const companiesWithTwoOs = (cmp) => {
  let newCmp = cmp.match(/\w*(\w)\w*\1\w*/gm)
  let arr = []
  newCmp.forEach((element) => {
    if (element.split('').includes('o')) {
      arr.push(element)
    }
  })

  return arr

  // EXPLANATION

  // NODE                     EXPLANATION
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
  // --------------------------------------------------------------------------------
  //   (                        group and capture to \1:
  // --------------------------------------------------------------------------------
  //     \w                       word characters (a-z, A-Z, 0-9, _)
  // --------------------------------------------------------------------------------
  //   )                        end of \1
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
  // --------------------------------------------------------------------------------
  //   \1                       what was matched by capture \1
  // --------------------------------------------------------------------------------
  //   \w*                      word characters (a-z, A-Z, 0-9, _) (0 or
  //                            more times (matching the most amount
  //                            possible))
}

companiesWithTwoOs(companies)
console.log(companiesWithTwoOs(companies))
