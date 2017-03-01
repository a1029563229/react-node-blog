import React from 'react';
import './article.scss';
import cs from 'classnames';
import AMUIReact from 'amazeui-react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
const Input = AMUIReact.Input;
const Button = AMUIReact.Button;

var WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: ''};
  },
  componentWillReceiveProps(nextProps) {
      this.setState({message: nextProps.message});
  },
  render: function() {
    return <input type="text" valueLink={this.linkState('message')} />;
  }
});

class Publish extends React.Component{
  constructor(...args) {
    super(...args);
    this.state = {
      title:'123',
      content:'123',
      data:{
        title:'321',
        content:'1'
      }
    }
  }

  handleChangeTitle(e) {
    let value = e.target.value;
    this.setState({
      data:{
        title:value,
        content:this.state.data.content
      }
    })
  }

    handleChangeContent(e) {
      let value = e.target.value;
      this.setState({
        data:{
          title:this.state.data.title,
          content:value
        }
      })
    }

  render() {
    return (
      <div className="form-content">
        <form className="am-form">
          <Input label="标题" labelClassName="am-u-sm-2"
           wrapperClassName="am-u-sm-10" value={this.state.data.title}
           onChange={this.handleChangeTitle.bind(this)} />
         <Input type="textarea" rows="20" label="内容" labelClassName="am-u-sm-2"
           wrapperClassName="am-u-sm-10" value={this.state.data.content}
           onChange={this.handleChangeContent.bind(this)} />
         <Button className="submit-button" amStyle={cs({'primary':this.state.data.title!='' && this.state.data.content!='','default':true})} block>发表</Button>
        </form>
      </div>
    )
  }
}

export const PublishView = () => (
  <Publish />
)

export default PublishView;
