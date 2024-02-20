import React from "react";

class ConfirmButtonclassver extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            isConfirmed: false,
        };

        //방법 1. bind 사용하기
        //this.handleConfirm = this.handleConfirm.bind(this);
    }

    //방법1. bind사용할 때의 handleConfirm()함수 형태
    /*handleConfirm() {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    } */

    //방법2. Class fielsd syntax 사용 (bind 코드 제거 후, ArrowFunction으로 바꾸기)
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }
    render(){
        return(
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}>
                    {this.state.isConfirmed ? "확인했슈~" : "확인하기"}
                </button>
        )
    }
}

export default ConfirmButtonclassver;