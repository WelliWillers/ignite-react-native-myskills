/*global device, element, by*/
/*eslint no-undef: "error"*/

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('check register new skill', async () => {
    const input = await element(by.id('input-new'));
    const button = await element(by.id('button-add'));
    const flatlist = await element(by.id('flatlist-skills'));

    await input.tap();
    await input.typeText('React Native');
    await button.tap();

    await flatlist.tap();

    expect(flatlist).toBeVisible();
  });
});
