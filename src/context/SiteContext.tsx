import React from 'react';
import { UserInfo } from '../models/interfaces';
export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    userInfo: {},
    currentConversation: {
      prompt: { role: '', request: '' },
      response: ''
    }
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
      currentConversation: {
        prompt: {
          role,
          request
        }
      }
    });
  };

  setCurrentResponse = (response: string) => {
    this.setState({
      currentConversation: {
        response
      }
    });
  };

  clearCurrentConversation = () => {
    this.setState({
      currentConversation: {
        prompt: { role: '', request: '' },
        response: ''
      }
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
