
https://blog.jakoblind.no/learn-react-redux-by-coding-the-connect-function-yourself/

function ReduxConnect(mapStateToProps, mapDispatchToProps){
    return function(WrappedCompnent){
        return class extends React.component {
            // 
            constructor(props){
                super(props);
            }

            //
            componentDidMount(){
                this.unscribe = store.subscribe(this.handleChange.bind(this));
            }

            componentWillUnmount(){
                this.unscribe();
            }

            handleChange() {
                // and whenever the store state changes, it re-renders.
                this.forceUpdate()
            }

            // 
            render(){
                <WrappedCompnent 
                    {...this.props}
                    {...mapStateToProps(store.getState(), this.props)}
                    {...mapStateToProps(store.dispatch, this.props)}
                />
            }
        }
    }
}
