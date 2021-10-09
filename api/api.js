import axios from "axios";

const base = axios.create({
    baseURL: "https://myth-task-5.free.beeceptor.com"
});

export const getCards = (onResult) => {
    base.get("/cards").then((response) => {
        onResult(response.data.universeCards)
    });
};
