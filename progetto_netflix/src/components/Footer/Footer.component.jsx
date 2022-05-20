import React from 'react'


export default function Footer () {
    return(
        <div className='border-top border-info border-5 mt-5'>
            <footer class="container-fluid relative no-overflow mt-5">
                <div class="container py-4 py-lg-5">

                <section class="row justify-content-around py-4">

                    <div class="col-12 col-lg-3 mb-4 mb-lg-0">

                        <h3 class="text-yellow bold mb-0" itemprop="name">Srl</h3>

                        <hr class="short-yellow"/>

                        <p class="bold" itemprop="address">
                        Strada S. Giorgio Martire, 2D<br/>
                        70124
                        </p>

                        <ul class="bold list-unstyled mb-4">
                        <li><a href="" class=""><i class="fa fa-envelope mr-2 text-yellow" aria-hidden="true"></i>Contattaci</a></li>
                        <li><i class="fa fa-phone mr-2 text-yellow" aria-hidden="true"></i><span itemprop="telephone">3926024621</span></li>
                        </ul>

                    
                        <ul class="list-inline mb-0">
                        <li class="list-inline-item"><a href="https://aulab.it/facebook" target="_blank" class="footer-icons mx-1" title="facebook"><i class="fab fa-2x fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li class="list-inline-item"><a href="https://aulab.it/instagram" target="_blank" class="footer-icons mx-1" title="instagram"><i class="fab fa-2x fa-instagram" aria-hidden="true"></i></a></li>
                        <li class="list-inline-item"><a href="https://aulab.it/whatsapp" target="_blank" class="footer-icons mx-1" title="whatsapp"><i class="fab fa-2x fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li class="list-inline-item"><a href="https://aulab.it/twitter" target="_blank" class="footer-icons mx-1" title="twitter"><i class="fab fa-2x fa-twitter" aria-hidden="true"></i></a></li>
                        <li class="list-inline-item"><a href="https://aulab.it/linkedin" target="_blank" class="footer-icons mx-1" title="linkedin"><i class="fab fa-2x fa-linkedin-in" aria-hidden="true"></i></a></li>
                        </ul>

                    </div>

                    <div class="col-12 col-lg-3 mb-4 mb-lg-0">

                        <h3 class="text-yellow bold mb-0">Quick Menu</h3>

                        <hr class="short-yellow"/>

                        <ul class="bold list-unstyled mb-4">
                            <li class="mb-2"><a href="https://aulab.it" class="">Full-time</a></li>
                            <li class="mb-2"><a href="https://aulab.it/hackademy-parttime" class=""> Part-time</a></li>
                            <li class="mb-2"><a href="https://aulab.it/hackweekend" class=""> Front-end</a></li>
                            
                            
                            <li class="mb-2"><a href="https://aulab.it/corso-di-informatica-programmazione-web" class="">Trova il corso giusto per te</a></li>
                            <li class="mb-2"><a href="https://aulab.it/come-imparare-a-programmare" class="">Come imparare a programmare</a></li>
                            <li class="mb-2"><a href="https://aulab.it/come-creare-un-sito-web-partendo-da-zero" class="">Crea un sito web partendo da zero</a></li>
                            <li class="mb-2"><a href="https://aulab.it/sviluppo-software" class="">Sviluppo Software</a></li>
                        </ul>

                    </div>
            
                    <div class="col-12 col-lg-3 mb-4 mb-lg-0">

                        <h3 class="text-yellow bold mb-0">Accreditamenti</h3>

                        <hr class="short-yellow"/>

                            <figure class="mb-5">
                                <a href="https://www.sistema.puglia.it/portal/pls/portal/SISPUGLIA.GES_ACCR_OF.P_APEX_ACCR_OF?p_target=21" class=" bold" target="_blank" rel="noopener">
                                    Ente di formazione professionale accreditato con codice n. 1RI74T1 <br/>
                                    <img src="/img/logo_puglia.png" alt="Socialfare" class="img-fluid mt-2" width="130"/>
                                </a>
                            </figure>

                        <h3 class="text-yellow bold mb-0">Pledge Viewer</h3>

                        <hr class="short-yellow"/>

                        <figure class="mb-5">
                            <a href="https://pledgeviewer.eu/member/1555" target="_blank" rel="noopener">
                                <img src="/img/pledge-viewer.png" alt="Pledge Viewer" class="img-fluid" width="200"/>
                            </a>
                        </figure>

                    </div>

                    <div class="col-12 col-lg-3 mb-4 mb-lg-0">

                        <h3 class="text-yellow bold mb-0">Accelerati da</h3>

                        <hr class="short-yellow"/>

                        <figure class="mb-5">
                            <a href="https://socialfare.org/en/start-up/aulab/" target="_blank" rel="noopener">
                                <img src="/img/logo-socialfare.png" alt="Socialfare" class="img-fluid" width="200"/>
                            </a>
                        </figure>

                    </div>

                </section>

                <section class="row">

                    <div class="col-12 text-right">

                        <p class="mb-0"><strong>*Fonti</strong><br/> AGID (Agenzia per l'Italia Digitale) - 2018<br/> 5° edizione dell'Osservatorio delle Competenze Digitali - 2019</p>

                    </div>

                </section>

        </div>

        <section class="row bg-darkest">

        <div class="col-12">

            <p class="text-center my-4">
                © 2020 <strong class="text-yellow"></strong>. Tutti i diritti riservati • P.IVA IT07647440721 • <a href="https://aulab.it/privacy-policy" target="_blank" class="text-white" title="privacy"><i class="fa fa-info-circle mr-1" aria-hidden="true"></i>Privacy Policy</a> • <a href="https://aulab.it/codice-etico" rel="nofollow" target="_blank" class="text-white" title="privacy"><i class="fa fa-gavel mr-1" aria-hidden="true"></i>Codice etico</a>
            </p>

        </div>

        </section>

</footer>
        </div>
    )
}
