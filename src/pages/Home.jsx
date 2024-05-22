import Feature from "../components/Feature"

const chat = require("../assets/icon-chat.png")
const money = require("../assets/icon-money.png")
const security = require("../assets/icon-security.png")

function Home() {
    return (
        <>
            <section className="section-1">
                <div>
                    <p className="subtitle">
                        No fees.<br/>
                        No minimum deposit.<br/>
                        High interest rates.
                    </p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section className="section-2">
                <Feature img={chat} title="You are our #1 priority" description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
                <Feature img={money} title="More savings means higher rates" description="The more you save with us, the higher your interest rate will be!"/>
                <Feature img={security} title="Security you can trust" description="We use top of the line encryption to make sure your data and money is always safe."/>
            </section>
        </>
    )
}

export default Home