import { FlagPipe } from './flag.pipe';

describe('FlagPipe', () => {
  let pipe: FlagPipe;

  beforeEach(() => {
    pipe = new FlagPipe();
  });

  it('should create an instance', () => {
    const pipe = new FlagPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the resource uri with base path "./assets/icons/flags/"', () => {
    const countryCode: string = 'ES';
    const expectedBasePath = './assets/icons/flags/';

    const resourcePath = pipe.transform(countryCode);
    const result = resourcePath.startsWith(expectedBasePath);

    expect(result).toBeTrue();
  });
});
