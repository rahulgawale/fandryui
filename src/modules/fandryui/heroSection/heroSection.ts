import { LightningElement } from 'lwc';

const GITHUB_URL = 'https://github.com/rahulgawale/fandryui';

export default class HeroSection extends LightningElement {
  handlePrimaryClick() {
    window.location.assign('/components');
  }

  handleGithubClick() {
    window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
  }
}
