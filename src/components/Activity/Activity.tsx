import React, { useEffect, useState } from 'react';
import styles from './Activity.module.css';

export default function ChoiceOfActivity(): JSX.Element {
    const [activityChoice, setActivity] = useState('');
    const [activityType, setActivityType] = useState('');
    const [activityParticipants, setActivityParticipants] = useState(0);
    const [activityPrice, setActivityPrice] = useState(0);
    const [activityLink, setActivityLink] = useState('');
    const [activityKey, setActivityKey] = useState('');
    const [activityAccessibility, setActivityAccessibility] = useState(0);

    function loadActivity(): void {
        fetch('https://www.boredapi.com/api/activity')
            .then((res: Response) => res.json())
            .then((obj: {
                activity: string,
                type: string,
                participants: number,
                price: number,
                link: string,
                key: string,
                accessibility: number
            }) => {
                const {
                    activity, type, participants, price, link, key, accessibility
                } = obj;
                setActivity(activity);
                setActivityType(type);
                setActivityParticipants(participants);
                setActivityPrice(price);
                setActivityLink(link);
                setActivityKey(key);
                setActivityAccessibility(accessibility);
            });
    }
    useEffect(() => {
        loadActivity();
    }, []);

    return (
    <div>
        <h1>Activity</h1>
        <button type="button" onClick={loadActivity} className={styles.button}>New Activity</button>
        <div className={styles.container}>
            <p className={styles.activity}>activity: {activityChoice}</p>
            <p className={styles.activity}>type: {activityType}</p>
            <p className={styles.activity}>participants: {activityParticipants}</p>
            <p className={styles.activity}>price: {activityPrice}</p>
            <p className={styles.activity}>link: {activityLink}</p>
            <p className={styles.activity}>key: {activityKey}</p>
            <p className={styles.activity}>accessibility: {activityAccessibility}</p>
        </div>
    </div>
    );
}
