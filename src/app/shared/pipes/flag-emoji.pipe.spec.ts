import { FlagEmojiPipe } from './flag-emoji.pipe';

describe('FlagEmojiPipe', () => {
  it('should create an instance', () => {
    const pipe = new FlagEmojiPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the flag emoji from country code', () => {
    const pipe = new FlagEmojiPipe();

    const countryCode = 'ES';
    const expectedValue = '🇪🇸';

    const result = pipe.transform(countryCode);

    expect(result).toBe(expectedValue);
  });
});
