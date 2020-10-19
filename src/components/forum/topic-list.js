import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import TopicItem from "./topic-item";
import { findTopic } from "../../controllers/topic";
import { NavLink } from "react-router-dom";
const TopicList = (props) => {
  const [topicList, setTopicList] = useState([]);
  useEffect(() => {
    findTopic(props.filter).then((data) => {
      setTopicList(data);
    });
  }, [props.filter]);
  if (topicList.length === 0) {
    return (
      <IonCard>
        <IonCardContent>no topics found</IonCardContent>
      </IonCard>
    );
  }
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>话题</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <NavLink to={"/forum"}>
            <IonItem>
              <IonLabel>全部</IonLabel>
            </IonItem>
          </NavLink>
          {topicList.map((topic) => {
            return (
              <TopicItem key={topic._id} id={topic._id} name={topic.name} />
            );
          })}
        </IonList>
        <NavLink to="/new/topic">
          <IonButton fill="clear">新建话题</IonButton>
        </NavLink>
      </IonCardContent>
    </IonCard>
  );
};

export default TopicList;
