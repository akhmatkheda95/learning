
        /*let name = prompt('what`s your name?');
        alert(name)*/

        /*let a = prompt("Первое число?", 1);
        let b = prompt("Второе число?", 2);

        alert(Number(a) + Number(b));*/


        /*let quest = prompt("Какое официальное название JavaScript?") 
        if (quest == "ECMAScript") {
            alert('верно');
        } else {
            alert("Не знаете? ECMAScript")
        }*/


            /*let numb = prompt()
            if(numb > 0 ) {
                alert(1)
            } else if(numb < 0) {
                alert(-1)
            } else {
                alert(0)
            }*/

               /* if(!(age >= 14 && age <= 90)) */

               /*let admin = prompt()
               let log = 'admin'
               if(admin == log) {
                let password = prompt()
                let pass = 'я главный'
                if(password == pass) {
                    alert('здравствуйте')
                } 
                else if(password !== pass) {
                    alert('неверный пароль')
                } 
                else (alert('отменено'))
               }
               else if(admin !== log) {
                alert('я вас не знаю')
               }
               else (alert('отменено'))*/

            
               let admin = prompt('who`s there?')

               if (admin == 'admin') {
                let password = prompt('password?')
                if(password == 'im main') {
                    alert('hello')
                }
                else if(password !== 'im main') {
                    alert('wrong password')
                }
                else if(password == '' || password == null ) {
                    alert('otmeneno')
                }
               }
               else if(admin == '' || admin == null) {
                alert('otmeneno')
               }
               else{alert('ya vas ne znayu')}