// Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - сначала увеличил, затем вернул
d = b++; alert(d);           // 1 - сначала вернул, затем увеличил
c = (2 + ++a); alert(c);      // 5 - перененная а уже была увеличена во 2 строке. Теперь происходит операция 2 + 1 + 2
d = (2 + b++); alert(d);      /* 4 - b увеличивается после возвращения результата, 
                                но в 3-й строке уже однократно была увеличена. Т.е. происходит операция 2 + 2
                                */
alert(a);                    // 3 - переменная была увеличена в строках 2 и 4
alert(b);                    // 3 - переменная была увеличена в строках 3 и 5