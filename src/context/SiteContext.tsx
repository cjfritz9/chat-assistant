import React from 'react';
export const ShopContext = React.createContext({});

export class SiteProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: false
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      // attempt login
    }
  }

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state
        }}
      >
        {
          //@ts-ignore
          this.props.children
        }
      </ShopContext.Provider>
    );
  }
}

export const ShopConsumer = ShopContext.Consumer;

export default SiteProvider;
