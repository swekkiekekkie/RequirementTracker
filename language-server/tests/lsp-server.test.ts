import { initialize, openDocument, changeDocument } from 'lsp-tester';
import { join } from 'path';

describe('LSP Server', () => {
  beforeEach(() => {
    // Reset the state before each test
    initialize();
  });

  type TestType = 'none' | 'single' | 'multiple'; 

  describe('should detect multiline comments', () => {
    const languages = ['ts', 'py', 'java'];
    const commentTypes = ['multiple', 'single', 'none'];

    const expectedValues: { [key in TestType]: string[] } = {
      none: [],
      single: ['This is a single multiline comment block.\nIt spans multiple lines.'],
      multiple: [
        'This is a multiline comment block.\nIt spans multiple lines.',
        'Another multiline comment block.\nIt also spans multiple lines.',
        'Yet another multiline comment block.\nIt spans multiple lines as well.'
      ]
    };

    languages.forEach((language) => {
      commentTypes.forEach((commentType) => {
        it(`should detect ${commentType} multiline comments in ${language}`, async () => {
          const filePath = join(__dirname, 'lang_agnostic', 'detects_multiline_comments', 'working_dir', language, `${commentType}.${language}`);
          const document = await openDocument(filePath);
          const content = document.getText();
          expect(content).toBeDefined();
          expect(content.split('\n').map(line => line.trim())).toEqual(expectedValues[commentType as TestType]);
        });
      });
    });
  });

  describe('trim_whitespace', () => {
    const languages = ['ts', 'py', 'java'];
    const indentations = ['indentation1', 'indentation2', 'indentation3'];

    languages.forEach((language) => {
      indentations.forEach((indentation) => {
        it(`should trim whitespace in ${language} with ${indentation}`, async () => {
          const filePath = join(__dirname, 'lang_agnostic', 'trim_whitespace', 'working_dir', language, `${indentation}.${language}`);
          const document = await openDocument(filePath);
          const content = document.getText();
          expect(content).toBeDefined();
          expect(content.split('\n').map(line => line.trim())).toEqual([
            'This is a multiline comment block.',
            'It spans multiple lines.'
          ]);
        });
      });
    });
  });
});
