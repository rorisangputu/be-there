import React from "react";
import { EventType } from "../../../backend/src/shared/types";

type eventCardProps = {
  EventData: EventType;
};

const EventCard = ({ EventData }: eventCardProps) => {
  return <div>EventCard</div>;
};

export default EventCard;
