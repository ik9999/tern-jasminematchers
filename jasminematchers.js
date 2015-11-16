(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  /**
   * Documentation: https://github.com/JamieMason/Jasmine-Matchers/blob/master/README.md
   */

  tern.registerPlugin("jasminematchers", function(server, options) {
    return {
      defs : defs
    };
  });
  var defs = {
    "!name": "jasminematchers",
    "!define": {
      "!jasmine": {        
        "toBeArray": {
          "!type": "fn()",
          "!doc": "Example: expect([]).toBeArray();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearray"
        },
        "toHaveArray": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: []}).toHaveArray('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearray"
        },
        "toBeArrayOfBooleans": {
          "!type": "fn()",
          "!doc": "Example: expect([true, false, true]).toBeArrayOfBooleans();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearrayofbooleans"
        },
        "toHaveArrayOfBooleans": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: [true, false, true]}).toHaveArrayOfBooleans('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearrayofbooleans"
        },
        "toBeArrayOfNumbers": {
          "!type": "fn()",
          "!doc": "Example: expect([12, 82, 7]).toBeArrayOfNumbers();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearrayofnumbers"
        },
        "toHaveArrayOfNumbers": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: [12, 82, 7]}).toHaveArrayOfNumbers('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearrayofnumbers"
        },
        "toBeArrayOfObjects": {
          "!type": "fn()",
          "!doc": "Example: expect([{}, {}]).toBeArrayOfObjects();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearrayofobjects"
        },
        "toHaveArrayOfObjects": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: [{}, {}]}).toHaveArrayOfObjects('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearrayofobjects"
        },
        "toBeArrayOfSize": {
          "!type": "fn()",
          "!doc": "Example: expect([null, 31, 'hi']).toBeArrayOfSize(3);",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearrayofsize"
        },
        "toHaveArrayOfSize": {
          "!type": "fn(memberName: string, size: number)",
          "!doc": "Example: expect({memberName: [null, 31, 'hi']).toBeArrayOfSi}).toHaveArrayOfSize('memberName', size);",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearrayofsize"
        },
        "toBeArrayOfStrings": {
          "!type": "fn()",
          "!doc": "Example: expect(['foo', 'bar']).toBeArrayOfStrings();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobearrayofstrings"
        },
        "toHaveArrayOfStrings": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: ['foo', 'bar']}).toHaveArrayOfStrings('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavearrayofstrings"
        },
        "toBeEmptyArray": {
          "!type": "fn()",
          "!doc": "Example: expect([]).toBeEmptyArray();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeemptyarray"
        },
        "toHaveEmptyArray": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: []}).toHaveEmptyArray('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveemptyarray"
        },
        "toBeNonEmptyArray": {
          "!type": "fn()",
          "!doc": "Example: expect([98, 'banana']).toBeNonEmptyArray();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobenonemptyarray"
        },
        "toHaveNonEmptyArray": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: [98, 'banana']}).toHaveNonEmptyArray('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavenonemptyarray"
        },
        "toBeBoolean": {
          "!type": "fn()",
          "!doc": "Example: expect(false).toBeBoolean();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeboolean"
        },
        "toHaveBoolean": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: false}).toHaveBoolean('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveboolean"
        },
        "toBeFalse": {
          "!type": "fn()",
          "!doc": "Example: expect(false).toBeFalse();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobefalse"
        },
        "toHaveFalse": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: false}).toHaveFalse('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavefalse"
        },
        "toBeTrue": {
          "!type": "fn()",
          "!doc": "Example: expect(true).toBeTrue();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobetrue"
        },
        "toHaveTrue": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: true}).toHaveTrue('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavetrue"
        },
        "toBeAfter": {
          "!type": "fn(date: +Date)",
          "!doc": "Example: expect(new Date('2014-01-01')).toBeAfter(new Date('1975-01-01'));",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeafter"
        },
        "toHaveDateAfter": {
          "!type": "fn(memberName: string, date: +Date)",
          "!doc": "Example: expect({memberName: new Date('2014-01-01')}).toHaveDateAfter('memberName', new Date('1975-01-01'));",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavedateafter"
        },
        "toBeBefore": {
          "!type": "fn(date: +Date)",
          "!doc": "Example: expect(new Date('1975-01-01')).toBeBefore(new Date('2014-01-01'));",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobebefore"
        },
        "toHaveDateBefore": {
          "!type": "fn(memberName: string, date: +Date)",
          "!doc": "Example: expect({memberName: new Date('1975-01-01')}).toHaveDateBefore('memberName', new Date('2014-01-01'));",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavedatebefore"
        },
        "toBeDate": {
          "!type": "fn()",
          "!doc": "Example: expect(new Date()).toBeDate();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobedate"
        },
        "toHaveDate": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: new Date()}).toHaveDate('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavedate"
        },
        "toBeIso8601": {
          "!type": "fn()",
          "!doc": "Example: expect('2013-07-08T07:29:15').toBeIso8601();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeiso8601"
        },
        "toHaveIso8601": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: '2013-07-08T07:29:15'}).toHaveIso8601('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveiso8601"
        },
        "toBeFunction": {
          "!type": "fn()",
          "!doc": "Example: expect(function() {}).toBeFunction();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobefunction"
        },
        "toHaveMethod": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: function() {}}).toHaveMethod('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavemethod"
        },
        "toThrowAnyError": {
          "!type": "fn()",
          "!doc": "Example: expect(function() {return badReference.unreachable;}).toThrowAnyError();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tothrowanyerror"
        },
        "toThrowErrorOfType": {
          "!type": "fn(errorType: fn())",
          "!doc": "Example: expect(function() {return badReference.unreachable;}).toThrowErrorOfType(ReferenceError);",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tothrowerroroftype"
        },
        "toBeCalculable": {
          "!type": "fn()",
          "!doc": "Example: expect('12').toBeCalculable();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobecalculable"
        },
        "toHaveCalculable": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: '14'}).toHaveCalculable('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavecalculable"
        },
        "toBeEvenNumber": {
          "!type": "fn()",
          "!doc": "Example: expect(4).toBeEvenNumber();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeevennumber"
        },
        "toHaveEvenNumber": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: 4}).toHaveEvenNumber('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveevennumber"
        },
        "toBeNumber": {
          "!type": "fn()",
          "!doc": "Example: expect(66).toBeNumber();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobenumber"
        },
        "toHaveNumber": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: 66}).toHaveNumber('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavenumber"
        },
        "toBeOddNumber": {
          "!type": "fn()",
          "!doc": "Example: expect(3).toBeOddNumber();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeoddnumber"
        },
        "toHaveOddNumber": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: 3}).toHaveOddNumber('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveoddnumber"
        },
        "toBeWholeNumber": {
          "!type": "fn()",
          "!doc": "Example: expect(10).toBeWholeNumber();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobewholenumber"
        },
        "toHaveWholeNumber": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: 10}).toHaveWholeNumber('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavewholenumber"
        },
        "toBeWithinRange": {
          "!type": "fn()",
          "!doc": "Example: expect(6).toBeWithinRange(0, 10);",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobewithinrange"
        },
        "toHaveNumberWithinRange": {
          "!type": "fn(memberName: string, rangeStart: number, rangeEnd: number)",
          "!doc": "Example: expect({memberName: 6}).toHaveNumberWithinRange('memberName', 0, 10);",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavenumberwithinrange"
        },
        "toBeEmptyObject": {
          "!type": "fn()",
          "!doc": "Example: expect({}).toBeEmptyObject();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeemptyobject"
        },
        "toHaveEmptyObject": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: {}}).toHaveEmptyObject('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveemptyobject"
        },
        "toBeNonEmptyObject": {
          "!type": "fn()",
          "!doc": "Example: expect({some: 'data'}).toBeNonEmptyObject();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobenonemptyobject"
        },
        "toHaveNonEmptyObject": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: {some: 'data'}}).toHaveNonEmptyObject('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavenonemptyobject"
        },
        "toBeObject": {
          "!type": "fn()",
          "!doc": "Example: expect({}).toBeObject();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeobject"
        },
        "toHaveObject": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: {}}).toHaveObject('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveobject"
        },
        "toHaveMember": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: undefined}).toHaveMember('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavemember"
        },
        "toImplement": {
          "!type": "fn(obj: ?)",
          "!doc": "Example: expect({name: 'Clive',age: 72}).toImplement({name: String,age: Number});",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#toimplement"
        },
        "toBeEmptyString": {
          "!type": "fn()",
          "!doc": "Example: expect('').toBeEmptyString();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeemptystring"
        },
        "toHaveEmptyString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: ''}).toHaveEmptyString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohaveemptystring"
        },
        "toBeHtmlString": {
          "!type": "fn()",
          "!doc": "Example: expect('<div></div>').toBeHtmlString();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobehtmlstring"
        },
        "toHaveHtmlString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: '<div></div>'}).toHaveHtmlString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavehtmlstring"
        },
        "toBeJsonString": {
          "!type": "fn()",
          "!doc": "Example: expect('{\"name\":\"Winston\"}').toBeJsonString();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobejsonstring"
        },
        "toHaveJsonString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: '{\"name\":\"Winston\"}'}).toHaveJsonString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavejsonstring"
        },
        "toBeLongerThan": {
          "!type": "fn(str: string)",
          "!doc": "Example: expect('Antidisestablishmentarianism').toBeLongerThan('No');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobelongerthan"
        },
        "toHaveStringLongerThan": {
          "!type": "fn(memberName: string, str: string)",
          "!doc": "Example: expect({memberName: 'Antidisestablishmentarianism'}).toHaveStringLongerThan('memberName', 'No');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavestringlongerthan"
        },
        "toBeNonEmptyString": {
          "!type": "fn()",
          "!doc": "Example: expect('filled up').toBeNonEmptyString();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobenonemptystring"
        },
        "toHaveNonEmptyString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: 'filled up'}).toHaveNonEmptyString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavenonemptystring"
        },
        "toBeSameLengthAs": {
          "!type": "fn(str: string)",
          "!doc": "Example: expect('Paul').toBeSameLengthAs('Jean');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobesamelengthas"
        },
        "toHaveStringSameLengthAs": {
          "!type": "fn(memberName: string, str: string)",
          "!doc": "Example: expect({memberName: 'Paul'}).toHaveStringSameLengthAs('memberName', 'Jean');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavestringsamelengthas"
        },
        "toBeShorterThan": {
          "!type": "fn()",
          "!doc": "Example: expect('No').toBeShorterThan('Antidisestablishmentarianism');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobeshorterthan"
        },
        "toHaveStringShorterThan": {
          "!type": "fn(memberName: string, str: string)",
          "!doc": "Example: expect({memberName: 'No'}).toHaveStringShorterThan('memberName', 'Antidisestablishmentarianism');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavestringshorterthan"
        },
        "toBeString": {
          "!type": "fn()",
          "!doc": "Example: expect('').toBeString();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobestring"
        },
        "toHaveString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: ''}).toHaveString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavestring"
        },
        "toBeWhitespace": {
          "!type": "fn()",
          "!doc": "Example: expect(' ').toBeWhitespace();",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tobewhitespace"
        },
        "toEndWith": {
          "!type": "fn(str: string)",
          "!doc": "Example: expect('grandmother').toEndWith('mother');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#toendwith"
        },
        "toStartWith": {
          "!type": "fn(str: string)",
          "!doc": "Example: expect('physiotherapy').toStartWith('physio');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tostartwith"
        },
        "toHaveWhitespaceString": {
          "!type": "fn(memberName: string)",
          "!doc": "Example: expect({memberName: ' '}).toHaveWhitespaceString('memberName');",
          "!url": "https://github.com/JamieMason/Jasmine-Matchers#tohavewhitespacestring"
        }
      }
    },
  };
});
