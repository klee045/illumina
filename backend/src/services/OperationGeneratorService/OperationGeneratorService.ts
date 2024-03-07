class OperationGeneratorService {
  public static generateOperation(): string {
    const operations: Array<string> = ["+", "-", "x", "÷"];

    return operations[Math.floor(Math.random() * operations.length)];
  }
}

export default OperationGeneratorService;
