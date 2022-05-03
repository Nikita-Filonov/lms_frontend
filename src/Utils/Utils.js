import {baseUrl} from "./Constants/Api";

export const toImage = (image: string) => baseUrl + `/static/images/${image}`;
