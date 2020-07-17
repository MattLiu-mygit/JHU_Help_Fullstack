import React from 'react';
import Collapsible from '../Collapsible';

const DIYPage = () => {
    return <>
        <h2>DIY Projects and Fun!</h2>
        <Collapsible className='outerCollapsible' title='DIY Projects for PPE, Disinfectants, and More' content={<>
            <Collapsible title='Reusable Clorox Wipes' content={<>
                <p><a href='https://chemistrycachet.com/diy-reusable-clorox-wipes/?fbclid=IwAR39DN2gmPdiCMlzE84dZe2Nk_mZrhqDSC81NcIORvlUtdVVfnE9Ba8WG_k'>“Recipe”</a> designed by a chemist</p>
                <p><b>PLEASE NOTE:</b> homemade cleaners do not contain preservatives or buffers, so it is almost impossible to take in to account environment that you breathe and live in, degradation of the objects cleaned, freshness of the air, etc.  </p>
                <p><b>The only way to be sure of disinfecting is to use pure isopropyl alcohol.</b><p>What does this mean? It means you must spray a surface with isopropyl alcohol, then follow up with a homemade cleaner.</p></p>
            </>} />
            <Collapsible title='Face Masks' content={<>
                <p>Here are some nice resources for making face masks.</p>
                <p>How to pick face mask material found <a href='https://smartairfilters.com/en/blog/best-materials-make-diy-face-mask-virus/?fbclid=IwAR2aSaz5WnRhtvZbPzxE4gms0iJtnw9peUYXUR35pnveMhKKtLdg5W_g0xM'>here</a>.</p>
                <p>Making a face mask sewing pattern <a href='https://www.craftpassion.com/face-mask-sewing-pattern/'>here</a>.</p>
                <p>Create Mask out of an <b>unused</b> HVAC Filter <a href='https://www.youtube.com/watch?v=ofw3AGhvP-0'>here</a>.</p>
            </>} />
            <Collapsible title='Electrolyte Drinks' content={
                <>
                    <p>Basically DIY Gatorade, providing your body those missing electrolytes after a good workout!</p>
                    <p>Electrolytes are also an effective way to keep sick people hydrated. </p>
                    <p><a href='https://www.drkarafitzgerald.com/recipe/super-hydrating-electrolyte-formula/</p>'>Recipe</a> adapted from WHO’s recommendation. </p>
                    <p>Tip: The recipe is basically just salt water. To add flavor, add some <div style={{ color: 'orange', display: 'inline-block' }}>citrus</div>, <div style={{ color: 'purple', display: 'inline-block' }}>berries</div>, or (the most popular) <div style={{ color: 'brown', display: 'inline-block' }}>honey.</div> </p>
                </>
            } />
        </>} />
        <Collapsible className='outerCollapsible' title='Fun and Games' content={<>
            <Collapsible title='Netflix' content={<>
                <p><a href='https://www.netflixparty.com/'>Watch</a> Netflix with friends and/or aquaintances or family!</p>
                <p>Unfortunately, all your friends need a netflix account for this to work. BUT you can always screenshare for that one friend.</p>
            </>} />
            <Collapsible title='Cards Against Humanity' content={<>
                <p>Play online free <a href='https://pyx-1.pretendyoure.xyz/zy/game.jsp'>here</a>.</p>
                <p>If the first link doesn't load, it's probably because everyone's crowding the first game. A second(hopefully non-crowded) site is found <a href='https://pyx-2.pretendyoure.xyz/zy/game.jsp'>here</a>.</p>
            </>} />
            <Collapsible title='Explore Street Art' content={<>
                <p>Explore street art through Google Maps <a href='https://streetart.withgoogle.com/en/'>here</a>.</p>
            </>} />
            <Collapsible title='Hackathons' content={<>
                <p>Google search some Hackathons to join! Haha! Fun coding and learning workshops and stuff!</p>
                <p>(Didn't participate in a single hackathon, but hey, learning how to program this cool smooth, dynamic website is pretty cool too, right? xD Take a peak at the code <a href='https://github.com/MattLiu-mygit/JHU-Help'>here</a> if you want to take a look at my the code)</p>
            </>} />
            <Collapsible title='Social Distancing Mini-game' content={<>
                <p>Have fun in a social Distancing Mini-game!</p>
                <p>Receive in-game rewards for staying in one location, practicing social distancing during this pandemic. </p>
                <p>Find out more <a href='https://devpost.com/software/stay-home-pyqn19?fbclid=IwAR2qyjIw1n-CLcK56xNI4ZDJzLFj8KfBTVdOKmBffn9wZux1VU1a6n4gj0Y'>here</a>.</p>
            </>} />
        </>} />
    </>
}

export default DIYPage;