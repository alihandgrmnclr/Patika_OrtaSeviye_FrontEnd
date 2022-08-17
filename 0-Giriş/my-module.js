// const topla= (a,b) => a+b;

// export default topla;   // bu fonksiyoonu dışa aktardık

// export const topla = (a, b) => a + b;  //bu şekilde de direkt dışarı aktarabiliriz.

const topla = (a, b) => a + b;

const hello = (name) => {
    // console.log("hello "+name);
    console.log(`hello ${name}`);
};

const cikar = (a,b) => a-b;

export{topla,hello,cikar};  // export işlemi