import React from 'react';
import {log} from "util";

export const WhatPurposesObjectCanBeUsedFor = () => {
    //
    // console.log('для каких целей может использоваться объект')
    // console.log(' typeof typeof null: ', typeof typeof null);
    // console.log(' null - это ссылка на несуществующий объект: ',);
    // console.log('  typeof typeof undefined: ', typeof typeof undefined);
    // console.log(' undefined - отсутствие определенности : ',);
    // console.log(' typeof 123: ', typeof 123);
    // console.log(' typeof NaN:  - данный является рез-том когда мы пытаемся привести к числу но не можем', 123 / "yo");
    // console.log('  NaN === NaN: - false - NaN всегда не раавно само себе', NaN === NaN);
    //
    // console.log(`10 + "0" -  сначала идет попытка приведения к строке те будет строка "100"
    //
    //                 только при попытке сложения происходит конкатенация строк при *-/ будет намбер
    //
    //  `, 10 + "10");
    //
    // console.log(`10 + "0" -  сначала идет попытка приведения к строке те будет строка "100"
    //
    //                 только при попытке сложения происходит конкатенация строк при *-/ будет намбер
    //
    //  `, (10 - "500"));
    //
    // console.log(`10 + "0" -  сначала идет попытка приведения к строке те будет строка "100"
    //
    //                 только при попытке сложения происходит конкатенация строк при *-/ будет намбер
    //
    //  `, (10 / "500"));


    console.log(`
            //Symbol
            //BigInt
            
            
            // Objects:
                
            // array => "object" => Array.isArray([])
            // object => "object"
            // function => "function"
            
            // 1. составной тип данных
            // 2. имеют свойства и методы
            // 3. ссылочный тип данных
            
            //когда создаем объект в нем (в переменной) хранится не само значение а ссылка на объект 
            
    `);

    console.log((typeof new Number(5)));
    console.log((typeof 5));


    const bob = {name: 'bob'}
    const alex = bob;

    console.log(' alex: ', alex);
    console.log(`
                
                const bob = {name: 'bob'} // в переменной боб лежит ссылка на объект
                const alex = bob; новый объект не создается но в алекс присваевается
                ссылка на на боб
                            
                                            
                
                console.log([] === []) - false
                
    `);

    // console.log([] === [])

    const user = {
        name1: 'vasja',
        name12: 'vasja',
        n2ame1: 'vasja',
        na2me1: 'vasja',
        nam2e1: 'vasja',
        name2221name1name1: 'vasja',
        name1na2me1name1: 'vasja',
        name12name1name1: 'vasja',
        name1n3ame1name1: 'vasja',
        name1na3me1name1: 'vasja',
        name1nam3e1name1: 'vasja',
        name1name31name1: 'vasja',
    }
    console.log(' user: ', user);

    const coopyUser = {
        ...user,
        nam2e1: 'petja',
        na2me1: 'serega',
    }


    console.log(`
                данный способ ниже используется для изменения
                свойств/перезаписи свойств, т.к. дублирующиеся ключи
                будут перезаписываться
    `);
    console.log(' coopyUser: ', coopyUser);

    console.log(`c массивом лучше всего работать иммутабельно(не изменять сам массив а создать новый `);


    console.log(`map - преобразовать массив`);


    return (
        <>

        </>
    );
};
