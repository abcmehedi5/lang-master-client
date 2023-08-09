import person from '../../../assets/person1.jpg';
import person2 from '../../../assets/person2.jpg';
import person3 from '../../../assets/person4.jpeg';

const ThirdSection = () => {
    return (
        <div id='client'>
            <section id="home-icon" className="py-5 text-center">
                <h1 className='text-center font-bold m-5 text-green-600 text-4xl'>What People Say</h1>
                <div className="flex justify-center space-x-8">
                    <div className="w-1/3 p-4">
                        <p className="text-lg mb-4">
                            John went to the store to buy some groceries. He saw his friend Sarah there, and they chatted for a while before parting ways. Later that day, Sarah called John to invite him to a party on the weekend.
                        </p>
                        <img className='personImage mt-3' src={person} alt="" />
                        <h4 className="my-2">John Dallas</h4>
                        <p>Family Plan</p>
                    </div>
                    <div className="w-1/3 p-4">
                        <p className="text-lg mb-4">
                            Mary woke up early and went for a jog in the park. She felt refreshed and energized after the exercise. When she got back home, her husband surprised her with breakfast in bed as a reward for her healthy habit.
                        </p>
                        <img className='personImage mt-3' src={person3} alt="" />
                        <h4 className="my-2">Aimee Irving</h4>
                        <p>Individual Plan</p>
                    </div>
                    <div className="w-1/3 p-4">
                        <p className="text-lg mb-4">
                            Tom was nervous before his job interview. He had prepared well, but he still felt anxious. During the interview, he focused on his strengths and answered the questions confidently. A few days later, he received a call offering him the job.
                        </p>
                        <img className='personImage mt-3' src={person2} alt="" />
                        <h4 className="my-2">John Destin</h4>
                        <p>Individual Plan</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThirdSection;
