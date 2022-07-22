import React from "react";
import {Layout} from "../components";

const Imprint = () => {

    return (<Layout>
            <section id="imprint" className="h-fit px-6 md:px-[20%] mt-20 mb-20">
                <div className="my-40">
                    <h1 className="font-medium text-3xl md:text-5xl mb-2">Imprint</h1>
                    <div className="w-2/3 mt-14">
                        <p className="text-xl">
                            <strong>Character of this website:</strong>
                        </p>
                        <p className="text-lg mt-3">
                            This website is for private purposes only. It has no business or entrepreneurial reference
                            and is not formally subject to the imprint obligation. For this reason, some data is not
                            included in this imprint.
                        </p>
                    </div>
                    <div className="w-2/3 mt-14">
                        <p className="text-xl">
                            <strong>Legal provider identification:</strong>
                        </p>
                        <p className="text-lg mt-3">
                            Juri Kembügler, Germany <br/>
                            E-Mail: <a href="mailto:info@photogrammer.dev"
                                       className="hover:underline hover:text-black/80">info@photogrammer.dev</a>
                        </p>
                    </div>
                    <div className="w-2/3 mt-14">
                        <p className="text-xl">
                            <strong>Disclaimer and terms of use:</strong>
                        </p>
                        <p className="text-lg mt-3">
                            The content and design of this website are protected by copyright. Reproduction,
                            modification, distribution, sub-licensing and the like are only permitted with written
                            consent. This also applies to inclusion in electronic databases and reproduction on
                            electronic data carriers.
                        </p>
                        <p className="text-lg mt-3">
                            Please note that words or signs - brand names, patents or trademarks - on this website may
                            be subject to legal protection. Insofar as these are subject to the rights of others, we use
                            them solely for information purposes and in no way to gain an advantage.
                        </p>
                        <p className="text-lg mt-3">
                            Despite careful control of the content, I do not accept any responsibility for external
                            information or links to third party websites. The operators of linked sites are solely
                            responsible for their content.
                        </p>
                        <p className="text-lg mt-3">
                            This website was created with the greatest possible care. Nevertheless, freedom from errors
                            and correctness of the information cannot be guaranteed. Liability claims are therefore
                            completely excluded.
                        </p>
                    </div>
                    <div className="w-2/3 mt-14">
                        <p className="text-xl">
                            <strong>Widerspruch Werbe-Mails:</strong>
                        </p>
                        <p className="text-lg mt-3">
                            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
                            Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
                            hiermit widersprochen. Der Betreiber der Seiten behält sich ausdrücklich rechtliche Schritte
                            im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                        </p>
                    </div>
                    <div className="w-2/3 mt-14">
                        <p className="text-xl">
                            <strong>Social Media Präsenz:</strong>
                        </p>
                        <p className="text-lg mt-3">
                            Dieses Impressum gilt auch für den Instagram-Account „_photogrammer_“.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>)
}

export default Imprint
