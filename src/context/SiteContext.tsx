import React from 'react';
import { UserInfo } from '../models/interfaces';
export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    userInfo: {},
    currentPrompt: { role: '', request: '' },
    currentResponse: ''
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      // attempt login
    }
  }

  setIsLoggedIn = (bool: boolean) => {
    this.setState({ isLoggedIn: bool });
  };

  setIsLoading = (bool: boolean) => {
    this.setState({ isLoading: bool });
  };

  setUserInfo = (info: UserInfo) => {
    this.setState({ userInfo: info });
  };

  setCurrentRequest = (role: string, request: string) => {
    this.setState({
      currentPrompt: {
        role,
        request
      }
    });
  };

  setCurrentResponse = (response: string) => {
    this.setState({
      currentResponse: response
    });
  };

  clearCurrentConversation = () => {
    this.setState({
      currentPrompt: { role: '', request: '' },
      currentResponse: ''
    });
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setIsLoggedIn: this.setIsLoggedIn,
          setIsLoading: this.setIsLoading,
          setUserInfo: this.setUserInfo,
          setCurrentRequest: this.setCurrentRequest,
          setCurrentResponse: this.setCurrentResponse,
          clearCurrentConversation: this.clearCurrentConversation
        }}
      >
        {
          //@ts-ignore
          this.props.children
        }
      </SiteContext.Provider>
    );
  }
}

export const ShopConsumer = SiteContext.Consumer;

export default SiteProvider;
