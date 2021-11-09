//============== CALLBAKC FUNCTION EXAMPLE ====================

function callbackFunction(value){
    value += 10;
    console.log(value);
}

function fakeUseEffect(callback, value, bool){
    if (bool){
        console.log('invoked once');
        return;
    }

    callback(value);
}

fakeUseEffect(callbackFunction, 10, false);

//=================DEFINE CALBACK FUNCTION WITH ARROW FUNCTION ================

function printName(name, anyfunction){
    const fullName = name + ' Nguyen';
    anyfunction(fullName);
}

printName('Truc', (givenName) => {
    console.log(givenName);
})

//================== CALLBACK HELL ==================
