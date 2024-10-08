import React from "react";
import './watch.css';

const watch = [
    {
        id: 1,
        title: "Real Madrid vs Manchester united",
        description: "Check out these highlights from Real Madrid s 2-0 win over Manchester United in their club friendly matchup.",
        videoUrl: "https://in.video.search.yahoo.com/search/video;_ylt=Awrx.Yu7.PhmZAQAB6i7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210IN714G0&p=Real+madrid+recent+matches&fr=mcafee&turl=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOVP.MAx9VN-lWeAzqvCH4m6IqwHgFo%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP-6Kgwwr3IU&tit=Real+Madrid+vs.+Manchester+United+%7C+Full+Game+Highlights+%7C+ESPN+FC&pos=01&vid=ee58a4298175bcadd3c81a1d0faf3f87&sigr=LOavcWwd5qCX&sigt=3FRgnMVx2akM&sigi=Dey3J08.sG2j",
        thumbnail: "/images/match1.jpg",
    },
    {
        id: 2,
        title: "Real Madrid vs Alaves",
        description: "Check out these highlights from Real Madrid's 3-2 win over Alaves in LaLiga.",
        videoUrl: "https://in.video.search.yahoo.com/search/video;_ylt=Awrx.Yu7.PhmZAQACKi7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210IN714G0&p=Real+madrid+recent+matches&fr=mcafee&turl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOVF.X8KPoxXiwmDcS3gJxCXnnQ%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D2vZCPttIsmw&tit=HIGHLIGHTS+%7C+Real+Madrid+3-2+Alav%C3%A9s+%7C+LaLiga+2024%2F25&pos=11&vid=d9bb5265bfc5b65613899453226aff99&sigr=6l7GJAphWK5k&sigt=pYfhwmYNsnfi&sigi=BcpcYpeIqDqr",
        thumbnail: "/images/watch2.jpg",
    },
    {
        id: 3,
        title: "Real Madrid vs Valencia",
        description: "Check out these highlights from Real Madrid's 5-1 win over Valencia in LaLiga.",
        videoUrl: "https://in.video.search.yahoo.com/search/video;_ylt=Awrx.Yu7.PhmZAQACai7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E210IN714G0&p=Real+madrid+recent+matches&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.VYrRm6MZ5NoHhqQlBGX5_AHgFo%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZlNgS2EOYtw&tit=Real+Madrid+5-1+Valencia+%7C+HIGHLIGHTS+%7C+LaLiga+2023%2F24&pos=21&vid=1ac64ffe85c0c9910afd42391771a0c5&sigr=_eK8ihLFAHuh&sigt=FLNjV7vyPGoM&sigi=7IlYSrv0_aB6",
        thumbnail: "/images/watch3.jpg", 
    },
    {
        id: 4,
        title: "Real Madrid vs Girona",
        description: "Check out these highlights from Real Madrid's 4-0 win over Girona in LaLiga",
        videoUrl: "https://in.video.search.yahoo.com/video/play;_ylt=Awrx_Zcq.fhmm14FfD_mHAx.;_ylu=c2VjA3NyBHNsawN2aWQEZ3BvcwM0?p=Real+madrid+recent+matches&vid=6ac26e4aa0fd3999b80e73959df18c4d&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.nbkrTRvPUn06_yvVVGsIrQHgFo%26pid%3DApi%26h%3D360%26w%3D480%26c%3D7%26rs%3D1&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAcgDUg4jIh0&tit=%3Cb%3EReal%3C%2Fb%3E+%3Cb%3EMadrid%3C%2Fb%3E+4-0+Girona+%7C+HIGHLIGHTS+%7C+LaLiga+2023%2F24&c=3&sigr=3w9MTtkNTRxb&sigt=v3UXmnirkZ1c&sigi=gMSJ4WOEpMVB&fr2=p%3As%2Cv%3Av&h=360&w=480&l=199&age=1707602230&fr=mcafee&tt=b",
        thumbnail: "/images/watch4.jpg",
    }
];

const Watch = () => {
    return (
        <main>
            <div className="shop-container">
                <h1>Matches</h1>
            </div>
    
            <div className="watch-container">
                <div className="watch-list">
                    {watch.map(watch => (
                        <div key={watch.id} className="watch-card">
                            <h2>{watch.title}</h2>
                            <div className="thumbnail-container">
                                <a href={watch.videoUrl} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={watch.thumbnail} 
                                        alt={watch.title} 
                                        className="watch-thumbnail" 
                                    />
                                </a>
                            </div>
                           
                            <p>{watch.description}</p>
                            <a href={watch.videoUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Watch;
