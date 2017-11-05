import React, { Component } from 'react';
import Card from 'components/Card/Card';
import Textarea from 'components/Textarea/Textarea';

class Colorlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: []
    };
    // this.changeHandler = this.changeHandler.bind(this);
    this.getCardListInfo = this.getCardListInfo.bind(this);
  }
  getCardListInfo(colorMsg) {
    const colorarr = this.state.cardList;
    colorarr.push(colorMsg);
    this.setState({ cardList: colorarr });
  }
  render() {
    return (
      <div id="page-colorList">
        <h1>Sass 變數</h1>
        <div className="listbox">
          <Textarea colorMsg={colorMsg => this.getCardListInfo(colorMsg)} />
          <ul>
            {
              this.state.cardList.map(item => (
                <Card key={item.colorid} varname={item.varname} colorcode={item.colorcode} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Colorlist;
