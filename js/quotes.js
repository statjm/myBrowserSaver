const quotes = [
    {
        quote:"나약한 태도는 나약한 성격이 된다.",
        author:"알버트 아인슈타인",
    },
    {
        quote:"할 수 있는 자는 행한다. 할 수 없는 자는 가르친다.",
        author:"조지 버나드 쇼",
    },
    {
        quote:"상상하지 않는 자에겐 날개가 있을 수 없다.",
        author:"모하메드 알리",
    },
    {
        quote:"용기란 일어나 말할 수 있게 하는 자질이다. 동시에, 용기는 앉아서 들을 수 있게 하는 것이기도 하다.",
        author:"윈스턴 처칠",
    },
    {
        quote:"느리더라도 꾸준하면 경주에서 이긴다",
        author:"이솝",
    },
    {
        quote:"배고프다",
        author:"임정민",
    },
    {
        quote:"졸렵다",
        author:"임정민",
    },
    {
        quote:"집에가고싶다",
        author:"임정민",
    },
    {
        quote:"놀고싶다",
        author:"임정민",
    },
    {
        quote:"행복하다",
        author:"임정민",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;