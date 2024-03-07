class NumberGeneratorService {
  public static generateNumber(): number {
    return Math.floor(Math.random() * 12);
  }
}

export default NumberGeneratorService;
