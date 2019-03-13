import React, { Component } from 'react';
import '../App.css';

import LanguagesCard from '../components/Card/LanguagesCard';
import Button from '../components/Button/Button';
import Grid from '../components/Grid/Grid';
import ButtonContainer from '../components/ButtonContainer/ButtonContainer';
import { flags } from '../data/flags';

class Languages extends Component {
  render() {
    return (
      <div className="App">
        <h2>What countries are you interested in?</h2>
        <Grid>
          <LanguagesCard language="United Arab Emirates" image={flags.ae} />
          <LanguagesCard language="Argentina" image={flags.ar} />
          <LanguagesCard language="Austria" image={flags.at} />
          <LanguagesCard language="Belgium" image={flags.be} />
          <LanguagesCard language="Bulgaria" image={flags.bg} />
        </Grid>
        <Grid>
          <LanguagesCard language="Brazil" image={flags.br} />
          <LanguagesCard language="Canada" image={flags.ca} />
          <LanguagesCard language="Switzerland" image={flags.ch} />
          <LanguagesCard language="China" image={flags.cn} />
          <LanguagesCard language="Columbia" image={flags.co} />
        </Grid>
        <Grid>
          <LanguagesCard language="Cuba" image={flags.cu} />
          <LanguagesCard language="Czech Republic" image={flags.cz} />
          <LanguagesCard language="Germany" image={flags.de} />
          <LanguagesCard language="Egypt" image={flags.eg} />
          <LanguagesCard language="France" image={flags.fr} />
        </Grid>
        <Grid>
          <LanguagesCard language="United Kingdom" image={flags.gb} />
          <LanguagesCard language="Greece" image={flags.gr} />
          <LanguagesCard language="Hong Kong" image={flags.hk} />
          <LanguagesCard language="Hungary" image={flags.hu} />
          <LanguagesCard language="Indonesia" image={flags.id} />
        </Grid>
        <Grid>
          <LanguagesCard language="Ireland" image={flags.ie} />
          <LanguagesCard language="Israel" image={flags.il} />
          <LanguagesCard language="India" image={flags.in} />
          <LanguagesCard language="Italy" image={flags.it} />
          <LanguagesCard language="Japan" image={flags.jp} />
        </Grid>
        <Grid>
          <LanguagesCard language="Republic of Korea" image={flags.kr} />
          <LanguagesCard language="Lithuania" image={flags.lt} />
          <LanguagesCard language="Latvia" image={flags.lv} />
          <LanguagesCard language="Morocco" image={flags.ma} />
          <LanguagesCard language="Mexico" image={flags.mx} />
        </Grid>
        <Grid>
          <LanguagesCard language="Malaysia" image={flags.my} />
          <LanguagesCard language="Nigeria" image={flags.ng} />
          <LanguagesCard language="Netherlands" image={flags.nl} />
          <LanguagesCard language="Norway" image={flags.no} />
          <LanguagesCard language="New Zealand" image={flags.nz} />
        </Grid>
        <Grid>
          <LanguagesCard language="Philippines" image={flags.ph} />
          <LanguagesCard language="Poland" image={flags.pl} />
          <LanguagesCard language="Portugal" image={flags.pt} />
          <LanguagesCard language="Romania" image={flags.ro} />
          <LanguagesCard language="Russian Federation" image={flags.ru} />
        </Grid>
        <Grid>
          <LanguagesCard language="Saudi Arabia" image={flags.sa} />
          <LanguagesCard language="Sweden" image={flags.se} />
          <LanguagesCard language="Singapore" image={flags.sg} />
          <LanguagesCard language="Slovenia" image={flags.si} />
          <LanguagesCard language="Slovakia" image={flags.sk} />
        </Grid>
        <Grid>
          <LanguagesCard language="Thailand" image={flags.th} />
          <LanguagesCard language="Turkey" image={flags.tr} />
          <LanguagesCard language="Taiwan" image={flags.tw} />
          <LanguagesCard language="Ukraine" image={flags.ua} />
          <LanguagesCard language="United States" image={flags.us} />
        </Grid>
        <Grid>
          <LanguagesCard language="Venezuela" image={flags.ve} />
          <LanguagesCard language="South Africa" image={flags.za} />
          <LanguagesCard language="None" />
        </Grid>
        <ButtonContainer>
          <Button
            buttonText="Continue"
            onClick={() => alert('Button clicked')}
          />
        </ButtonContainer>
      </div>
    );
  }
}

export default Languages;
