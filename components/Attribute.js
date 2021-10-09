import React from 'react'
import {Image} from "react-native";
import {str, agi, int} from "../resources/images"

const Attribute = ({attribute, ...otherProps}) => {
    let src;
    switch (attribute) {
        case "str":
            src = str;
            break;
        case "agi":
            src = agi;
            break;
        case "int":
            src = int;
            break;
        default:
            src = str;
            break;
    }
    return <Image
        {...otherProps}
        source={src}
    />
};
export default Attribute;
