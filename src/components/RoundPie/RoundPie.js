import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';

class PieChat extends Component {
  componentDidMount() {
    this.chat = echarts.init(this.chatDom);
    this.renderChat();
  }
  componentDidUpdate() {
    this.renderChat();
  }
  renderChat() {
    const { data } = this.props;
    const option = {
      series: [
        {
          type: 'pie',
          radius: ['70%', '100%'],
          silent: true,
          grid: {
            show: true,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          data: [
            { value: data, name: '直接访问', itemStyle: { color: '#0096fa' } },
            { value: 100 - data, name: 'aa', itemStyle: { color: '#e9e9e9' } },
          ],
          labelLine: {
            show: false,
          },
        },
      ],
    };
    this.chat.setOption(option);
  }
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <div
          ref={(chatDom) => { this.chatDom = chatDom; }}
          style={{ height: '60px' }}
        />
      </div>

    );
  }
}

PieChat.propTypes = {
  className: PropTypes.string,
  data: PropTypes.number.isRequired,
};

export default PieChat;
