import React, {createElement as h} from 'react';
import glamorous from 'glamorous';
import button from 'mdlean/lib/button';
import fontIcon from 'components/FontIcon';
import DocTitle from 'components/docTitle';
import Row from 'components/Row';
import Title from 'components/Title';
import cardComponent from './cardComponent';
import guide from 'components/componentGuide'
import Content from './content';

export default context => {
  const { tr } = context;
  const FontIcon = fontIcon(context);
  const Button = button(context);
  const CardIcon = cardComponent(context);
  const { features, frontend, backend, tools } = Content();

  const Section = glamorous.section({
    borderTop: `1px solid lightgrey`,
    paddingBottom:30
  });

  const HeaderView = glamorous.section({
    padding: 20,
  });

  function Header() {
    return (
      <HeaderView>
        <h1>{tr.t('StarHackIt')}</h1>
        <h2>{tr.t('A Full Stack Web Application Starter Kit')}</h2>
        <h3>{tr.t('Built with React, Node, data backed by SQL')}</h3>

        <Button
          raised
          label="Clone the code on GitHub"
          href="https://github.com/FredericHeem/starhackit"
          icon={<FontIcon className="icon-github-circled-alt2" />}
        />
        <br />
      </HeaderView>
    );
  }

  function Features() {
    return (
      <Section>
        <Title>
          {tr.t('Features')}
        </Title>
        <Row className="text-center">
          {features.map((card, key) => <CardIcon key={key} {...card} />)}
        </Row>
      </Section>
    );
  }

  const E2eImg = glamorous.img({
    width: '100%',
    maxWidth: '1200',
  });

  function End2End() {
    return (
      <Section>
        <Title>
          {tr.t('End to End Testing')}
        </Title>
        <E2eImg
          alt="functional-testing"
          src="https://raw.githubusercontent.com/FredericHeem/gifs/master/starhackit-functional-testing.gif"
        />
      </Section>
    );
  }

  function Frontend() {
    return (
      <Section>
        <Title>
          {tr.t('Frontend - User Interface')}
        </Title>
        <Row>
          {frontend.map((card, key) => <CardIcon key={key} {...card} />)}
        </Row>
      </Section>
    );
  }

  function Backend() {
    return (
      <Section>
        <Title>
          {tr.t('Backend - API Server')}
        </Title>
        <Row>
          {backend.map((card, key) => <CardIcon key={key} {...card} />)}
        </Row>
      </Section>
    );
  }

  function Tools() {
    return (
      <Section>
        <Title>
          {tr.t('Developer Tools')}
        </Title>
        <Row>
          {tools.map((card, key) => <CardIcon key={key} {...card} />)}
        </Row>
      </Section>
    );
  }

  return function landingScreen() {
    return (
      <div className="text-center">
        <DocTitle title="Home" />

        <Header />
        
        <Features />
        <End2End />
        <Frontend />
        <Backend />
        <Tools />
        {h(guide(context))}
      </div>
    );
  };
};