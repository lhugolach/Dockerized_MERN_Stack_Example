import React from 'react';

export const Footer: React.FunctionComponent = () => {
    return <>
        <div className="footer bg-secondary bg-gradient text-center row pt-5 rounded-top">
            <div className="col-4">
                <h3 className="mb-4">Nome Azienda</h3>
                <div className="col-10 ms-5">
                    <p className="text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatem, id ea minus optio nulla!</p>
                </div>
            </div>
            <div className="col-2">
                <h4 className="mb-4">Social</h4>
                <p><a href="/#">facebook</a></p>
                <p><a href="/#">Instagram</a></p>
                <p><a href="/#">Linkedin</a></p>
            </div>
            <div className="col-2">
                <h4 className="mb-4">Link utili</h4>
                <p><a href="/#">Lavora con noi</a></p>
                <p><a href="/#">Chi siamo</a></p>
                <p><a href="/#">Privacy Policy</a></p>
                <p><a href="/#">Cookie Policy</a></p>
            </div>
            <div className="col-4">
                <h4 className="mb-4">Contatti</h4>
                <p>Via Roma 1, 40125 Bologna (BO)</p>
                <p>info@gmail.com</p>
                <p>+39 123456789</p>
                <p>051 12345678</p>
            </div>
        </div>
    </>
}