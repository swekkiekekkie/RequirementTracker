import { LspServer } from '../../src/LspServer';
import { MessageHandler } from '../../src/MessageHandler';
import { DiagnosticsValidator } from '../../src/DiagnosticsValidator';
import { StateManager } from '../../src/StateManager';
import { TestUtils } from '../../src/TestUtils';

describe('LspServer', () => {
  let lspServer: LspServer;
  let messageHandler: MessageHandler;
  let diagnosticsValidator: DiagnosticsValidator;
  let stateManager: StateManager;
  let testUtils: TestUtils;

  beforeEach(() => {
    lspServer = new LspServer();
    messageHandler = new MessageHandler();
    diagnosticsValidator = new DiagnosticsValidator();
    stateManager = new StateManager();
    testUtils = new TestUtils();
  });

  it('should initialize correctly', () => {
    expect(lspServer).toBeDefined();
    expect(messageHandler).toBeDefined();
    expect(diagnosticsValidator).toBeDefined();
    expect(stateManager).toBeDefined();
    expect(testUtils).toBeDefined();
  });

  // Add more tests as needed
});
