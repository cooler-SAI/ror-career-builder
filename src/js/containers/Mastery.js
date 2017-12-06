import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Mastery.css';

import Ability from './Ability';

class Mastery extends Component {

  constructor(props) {
    super(props);
    this.renderPathPopover = this.renderPathPopover.bind(this);
    this.renderAbility = this.renderAbility.bind(this);
  }

  renderPathPopover(pathName) {
    if (this.props.abilities.mastery[pathName].popover) {
      return (
        <div>TODO popover</div>
        // <PathInfo careerPath={props.career.paths[pathName]} />
      );
    }
  }

  renderAbility(abilityId) {
    return (
      <Ability key={abilityId} data={this.props.abilitiesObject[abilityId]} />
    )
  }

  render() {

    const labelClass = classNames({
      [css.label]: true,
      'marginLeft--small': true,
      [css.labelActive]: this.props.points > 0,
    });

    return (
      <div className={css.container}>
        <h2 className={css.heading}>
          Mastery abilities <span className={labelClass}>{this.props.points} points</span>
        </h2>
        <div className="grid">
          <div className="grid-col-1-2 grid-col-1@mobile grid-col-1-3@sm-min">
            <div className="borderRight borderRight--none@mobile borderRight@sm-min marginRight borderBottom@mobile paddingBottom@mobile">
              <h3 className={css.subHeading}>
                {this.props.abilities.mastery.a.name}
                {this.renderPathPopover('a')}
              </h3>
              <div className="row row--justify">
                <div className="row row--justify">
                  {/* <PathMeterButtons />
                  <PathMeter /> */}
                </div>
                <div className="marginRight marginRight--large@mobile">
                  <div className={css.subHeadingSmall}>
                    Core<br />abilities
                  </div>
                  <div className="row">
                    <div className="column">{this.props.abilities.mastery.a.coreAbilities.map(this.renderAbility)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col-1-2 grid-col-1@mobile grid-col-1-3@sm-min">
            <div className="borderRight@sm-min marginRight marginTop@mobile borderBottom@mobile paddingBottom@mobile">
              <h3 className={css.subHeading}>
                {this.props.abilities.mastery.b.name}
                {this.renderPathPopover('b')}
              </h3>
              <div className="row row--justify">
                <div className="row row--justify">
                  {/* <PathMeterButtons />
                  <PathMeter /> */}
                </div>
                <div className="marginRight marginRight--large@mobile">
                  <div className={css.subHeadingSmall}>
                    Core<br />abilities
                  </div>
                  <div className="row">
                    <div className="column">{this.props.abilities.mastery.b.coreAbilities.map(this.renderAbility)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-col-1-2 grid-col-1@mobile grid-col-1-3@sm-min">
            <div className="borderRight borderRight--none@mobile borderRight--none@sm-min marginRight marginTop marginTop--none@sm-min">
              <h3 className={css.subHeading}>
                {this.props.abilities.mastery.c.name}
                {this.renderPathPopover('c')}
              </h3>
              <div className="row row--justify">
                <div className="row row--justify">
                  {/* <PathMeterButtons />
                  <PathMeter /> */}
                </div>
                <div className="marginRight marginRight--large@mobile">
                  <div className={css.subHeadingSmall}>
                    Core<br />abilities
                  </div>
                  <div className="row">
                    <div className="column">{this.props.abilities.mastery.c.coreAbilities.map(this.renderAbility)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ points, abilities, abilitiesObject }) {
  return {
    points,
    abilities,
    abilitiesObject
  };
}

export default connect(mapStateToProps, null)(Mastery);