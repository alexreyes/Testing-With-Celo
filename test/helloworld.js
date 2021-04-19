const HelloWorld = artifacts.require("HelloWorld");

contract("Hello world test", async => {
  it("Should return Celo", async () => {
    const instance = await HelloWorld.deployed();
    const name = await instance.getName.call();
    assert.equal(name, 'Celo');
  });
  it("Should rename to Figment Learn", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setName('Figment Learn');

    const name = await instance.getName.call();
    assert.equal(name, 'Figment Learn');
  });
  it("Should work with special characters ", async () => {
    const instance = await HelloWorld.deployed();
    await instance.setName('I ❤️ emojis 🎉');

    const name = await instance.getName.call();
    assert.equal(name, 'I ❤️ emojis 🎉');
  });
});
