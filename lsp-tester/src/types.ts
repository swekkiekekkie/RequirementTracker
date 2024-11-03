export interface Diagnostic {
  severity: DiagnosticSeverity;
  range: Range;
  message: string;
  source?: string;
  relatedInformation?: DiagnosticRelatedInformation[];
}

export enum DiagnosticSeverity {
  Error = 1,
  Warning = 2,
  Information = 3,
  Hint = 4
}

export interface Range {
  start: Position;
  end: Position;
}

export interface Position {
  line: number;
  character: number;
}

export interface DiagnosticRelatedInformation {
  location: Location;
  message: string;
}

export interface Location {
  uri: string;
  range: Range;
}
