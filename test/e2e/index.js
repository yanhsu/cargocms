require("../bootstrap.test.js")
describe('main page test', () => {
	describe('get index title', () => {
		it('should be get broser title of LFP @watch', () => {
			browser.url('http://localhost:1338/');

			expect(browser.getTitle()).to.equal('LFP: 香料香水實驗室，客製專屬香水');
		});
		it('login as admin @watch', () => {
			browser.click('#login');
			browser.setValue('#identifier', 'admin')
			browser.setValue('#password', 'admin')
			browser.click('#submit-button');

			expect(browser.getTitle()).to.equal('LFP: 香料香水實驗室，客製專屬香水');
			expect(browser.element('#logout-link').state === 'success').to.equal(true);
		});

		it('logout @watch', () => {
			browser.click('#logout-link');

			expect(browser.elements('#login').state === 'success').to.equal(true);
		});
	});
});
