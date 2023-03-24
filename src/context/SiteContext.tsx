import React from 'react';
import { UserInfo } from '../models/interfaces';
export const SiteContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    userInfo: {}
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
    this.setState({userInfo: info});
  };

  render() {
    return (
      <SiteContext.Provider
        value={{
          ...this.state,
          setIsLoggedIn: this.setIsLoggedIn,
          setIsLoading: this.setIsLoading,
          setUserInfo: this.setUserInfo
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
