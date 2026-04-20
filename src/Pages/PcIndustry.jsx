import { motion } from "motion/react"

export default function PcIndustry() {
  return (
    <motion.div initial={{opacity:0.4,y:200}} animate={{opacity:1, y:0,transitionDuration:"0.4s",transition:"ease-in-out"}}  className="w-full h-auto px-[2%] py-[6%] flex flex-col justify-center items-center">
      <h1 className="text-[60px] mb-[2%] w-[95%]">In subject area: Economics, Econometrics and Finance. The computer industry is defined as <strong> a sector focused on the development, production, and application of computer technologies</strong>, which thrives through the expansion of computer use across various societal sectors and is driven by competition and software development.</h1>
      <p className="text-[30px] w-[85%]">Dark Silicon and Future On-chip Systems <br />
5 Conclusion

Computer industry took advantage of Moore's law and Dennard scaling for several decades and significantly improved the performance of single-core processors. Around 2004, due to the failure of Dennard scaling, power and energy became the major constraint of digital systems. To offer higher performance without significant increase in power, computer industry moved toward multicore processors. While multicore processors lessen the power consumption of processors for several years, the computer industry is now in the dark silicon age where not all the cores of a processor can be functional with the highest power at the same time. In this chapter, we reviewed the main reasons behind the existence of dark silicon and how the speed of processors can be increased in the age of dark silicon. <br />
Book series <br />
2018, Advances in Computers <br />
Pejman Lotfi-Kamran, Hamid Sarbazi-Azad <br />

Accelerate the Development of Our Country's Computer Industry on September 23, 1984.
Publisher Summary <br />

Accelerating the development of the computer industry to satisfy the needs of China's modernization is an important task and duty entrusted by the people of China. The Ministry of Electronics Industry has designated computers as one of the strategic priorities in the development of the electronics industry and selected microcomputers as an area of focus to promote the comprehensive and balanced development of the computer industry. At present, China's computer industry—consisting of R&D, production, application, and personnel training—has established a significant foundation, and has in particular gained superiority with respect to the Chinese character system and technical service packages. China still needs to speed up technological upgrading on the existing foundation; organize efforts to tackle major scientific and technological problems; strive to improve research, design, and production technologies and its domestic auxiliary support capability; and resolve to improve the price/performance ratio of its domestically produced computers.
Book
2010, On the Development of China's Information Technology Industry <br />
Jiang Zemin <br />

Accelerate the Development of Our Country's Computer Industry on September 23, 1984. <br />
IV View the Country as a Whole, Remove Departmental and Regional Barriers, Formulate Overall Plans and Select the Best to Receive Our Support <br /><br />

As the authority responsible for the computer industry, the Bureau of Computer Industry of the Ministry of Electronics Industry needs to proceed from our national interests and view the country as a whole, make overall plans, and organize the main research and production forces in all departments, regions, local enterprises, and enterprises directly under the ministry on the basis of merit and set them on a track of nationwide professional collaboration. <br /> <br />

We must vigorously promote collaboration and the formation of consortiums of central and local enterprises and institutions, invest in partnerships through various means, and establish all forms of associations in R&D, production, education, business operations, and services. We must judge all consortiums on uniform criteria, select the best and grant them preferential treatment in financing, tariffs, and industrial and commercial taxes so they can become more competitive. <br />
Book <br />
2010, On the Development of China's Information Technology Industry <br />
Jiang Zemin <br /> <br />

Accelerate the Development of Our Country's Computer Industry on September 23, 1984. <br />
II Strive to Improve Research, Design, and Production Technology, Increase Domestication of Computers, and Establish Our Own Computer Industry <br />
<br />
It would be impossible for us to modernize without electronic computers. As the four modernizations progress, the demand for computers is growing rapidly, and we cannot rely on imported computers in the long run. This is not only because it saps our national strength, but also because genuinely advanced foreign products are not for sale and adequate supplies of spare parts and technical services for imported computers are not guaranteed, not to mention the additional oversight they are subject to, which imposes limitations.
<br /><br />
At present, our country's computer industry—consisting of R&D, production, application, and personnel training—has established a significant foundation, and has in particular gained superiority with respect to the Chinese character system and technical service packages. We still need to speed up technological upgrading on the existing foundation; organize efforts to tackle major scientific and technological problems; strive to improve research, design, and production technologies and our domestic auxiliary support capability; and resolve to improve the price/performance ratio of our domestically produced computers.
<br /><br />
At the same time, we need to work out limited protectionist policies to support the development and growth of our computer industry. <br />
Book <br />
2010, On the Development of China's Information Technology Industry <br />
Jiang Zemin <br /><br />

Introduction to Continuous Architecture <br />
Historical Perspective <br />
<br />
Let’s look at a brief history of the evolution of the computer and software industry. Our objective here is not to provide a comprehensive history but highlight a few key developments to put Continuous Architecture in a historical perspective.
<br /><br />
While looking at the history of computer technology, it is interesting to look at two aspects, the major technology “epochs” versus concepts evolving in software development and software architecture. We can articulate the major epochs in the computer industry as:
<br /><br />
1.  <br />

    The age of the mainframe (1950s +): This started basically in the 1950s with the main computing paradigm being mainframe computers. These were expensive and powerful machines that enabled large corporations to start automating certain aspects of their businesses as well as supporting scientific development.
2. <br />

    Getting personal (1970s +): This is when PCs (Personal Computers) as we know them today were introduced. It was a huge leap forward in the sense that computing power could be put in one machine that could sit on a desk. This enabled individuals to interact with computers in a much more “personal” manner. However, most individual users of such technology were still in large companies and research institutions.
3. <br />

    Distributing the load (1980s +): As computers evolved in capacity and started becoming networked, the concept of client server architecture started evolving. This resulted in a view that not all software needed to run on a single computer but that the computing burden could be shared. At that time, client server architecture and how best to distribute responsibilities were major architectural topics. As the client server paradigm evolved, so did the concept of networked computers.
4. <br />

    Era of connectivity (1990s +): The “network is the computer” term was coined in 1984 (the term is attributed to John Gage, Chief Researcher and fifth employee of Sun Microsystems), but it took another 10 years before the first commercial browser was introduced (The Mosaic browser was released in November 1993). The World Wide Web and Internet revolution has had tremendous impact on not only the software industry but also the entire world. We do not have sufficient space to detail its impact, but needless to say that everything has changed from the way we shop to the way we communicate and even to how our gadgets interact.
5. <br />

    Back to the future (2000s +): With the ubiquitous Internet came the opportunity to unleash us from dependency on physical devices. The ability to store and retrieve information from the cloud creates even further opportunities, as well as challenges.
<br />
    For example, we do not always physically own the books we buy on our e-readers.2 The company that sells us the books is the owner of the content and has the right to remove it, which would not be an option for old physical books. We will leave the ethical discussion of the Internet and cloud computing to other authors and go back to our architecture storyline.
<br />
    The cloud era has also enabled enterprises to only acquire the required software and compute capacity. We call this era “back to the future” because we are back to the model of leasing capacity, which was exactly the model in the mainframe days. The only difference is that we are implementing the model in a highly interconnected, standardized, and real-time world.
<br /><br />
The computer and software world will continue to evolve, with the next phase currently coming from mobile devices and wearable computers. What has not changed during this approximately half a century journey is the fact that developers still write code. What is also interesting is that productivity among developers is still quite varied, and creativity is still associated with the developer role. Basically, we still are in a software as a craft stage and have not been able to fulfill the industrial revolution and automation that have been promised at each stage in the journey.
<br />
What has changed, though, is the speed at which we are expected to execute, as well as the scale in which we need to operate. Quarterly release cycles are no longer relevant, and commercial solutions have to cater to increasing demands from end users in terms of performance, usability, and scalability.
<br />
Figure 1.1 highlights some interesting data points in the five epochs we have listed in the brief history of the commercial computer and software industry.
Sign in to download full-size image
<br />
Figure 1.1. Technology and architecture timeline.br
<br />
Let us now look at how the approach to software development and architecture has evolved during this journey. As stated before, some things have not changed. Structured programming has been with us for most of the journey and highlights key elements any current architect and developer would recognize: creating logical structure based on modularity.
<br />
The 1980s saw some key architectural patterns starting to evolve. The Open System Interconnection (OSI) Model in the network domain was an excellent example of creating a layered architecture. Enterprise Architecture concepts can be considered to have been jump-started with the introduction of the Zachman framework, which created a technology taxonomy that is still valid today.
<br />
The early to mid-1990s saw an explosion of ideas, from use cases to UML and Extreme Programming (XP). This was when object-oriented programming was the rage, which resulted in a series of efforts to create methodologies and techniques for this new world. It was also at the beginning of the Internet explosion, although we were not quite there.
<br />
The impact of the Internet era and the demand for quicker delivery of software resulted in the Agile Manifesto being published. An interesting footnote is that this was published right after the dot-com bubble burst. Over time, we have seen a gradual acceptance of the Agile approach and its evolution to Continuous Delivery and DevOps concepts.
<br />
In parallel, the Enterprise Architecture concept has gone through several waves of popularity and disillusionment. The fact that The Open Group Architecture Forum (TOGAF) standard is still active is an attestation that there still is demand for addressing enterprise-wide architectural concerns.
<br />
However, we believe that the concept of software architecture and in particular Enterprise Architecture is becoming less relevant for developers in large enterprises. Even if Enterprise Architecture groups exist, their impact on the day-to-day development is limited.
<br />
The activities of the Enterprise Architecture groups fail what we call the “junior developer” litmus test. This litmus test acknowledges that a lot of architectural decisions are made by developers in action—where the rubber hits the road. The litmus test validates if a junior developer on a team makes his or her decisions based on guidance from architects.
<br />
We believe that the gap between the Agile delivery and architecture practices within a commercial enterprise is wider than before. This is where Continuous Architecture comes in; it is a set of principles and tools targeted at addressing this gap.
<br />
Another way of looking at Continuous Architecture is by using an analogy based on real-life architecture. If our objective is to build a cathedral, an Agile developer will start shoveling, but an enterprise architect will look at a 5-year plan. The goal of Continuous Architecture is to bridge this gap (Figure 1.2).
Sign in to download full-size image
<br />

</p>  
    </motion.div>
  )
}
