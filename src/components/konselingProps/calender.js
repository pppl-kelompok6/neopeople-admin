import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  ViewState, IntegratedEditing, EditingState,
} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Resources,
  Appointments,
  AppointmentTooltip,
  DayView,
  DragDropProvider,
  AppointmentForm,
  WeekView,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  teal, indigo,
} from '@material-ui/core/colors';

const appointments = [{
  id: 0,
  title: 'Watercolor Landscape',
  members: [1, 2],
  roomId: 1,
  startDate: new Date("2022-01-01T16:30:00.000Z"),
  endDate: new Date(2022, 1, 1, 12, 0),
}, {
  id: 1,
  title: 'Oil Painting for Beginners',
  members: [1],
  roomId: 2,
  startDate: new Date(2017, 4, 28, 12, 30),
  endDate: new Date(2017, 4, 28, 14, 30),
}, {
  id: 2,
  title: 'Testing',
  members: [1],
  roomId: 1,
  startDate: new Date(2017, 4, 29, 12, 30),
  endDate: new Date(2017, 4, 29, 14, 30),
}, {
  id: 3,
  title: 'Final exams',
  members: [2],
  roomId: 2,
  startDate: new Date(2017, 4, 29, 9, 30),
  endDate: new Date(2017, 4, 29, 12, 0),
}];

const owners = [{
  text: 'Andrew Glover',
  id: 1,
  color: indigo,
}, {
  text: 'Arnie Schwartz',
  id: 2,
  color: teal,
}];

const locations = [
  { text: 'Room 1', id: 1 },
  { text: 'Room 2', id: 2 },
];

export default class Calender extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.sessionData,
      resources: [{
        fieldName: 'members',
        title: 'Members',
        instances: owners,
        allowMultiple: false,
      }, {
        fieldName: 'Room',
        title: 'Location',
        instances: locations,
      }],
    };
    console.log(this.props.sessionData)
    console.log(this.state.data)
    this.commitChanges = this.commitChanges.bind(this);
  }
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        // const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        // data = [...data, { id: startingAddedId, ...added }];
     }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources } = this.state;

    return (
      <Paper className="rounded border w-full">
        <Scheduler height={660}
          data={data}
        >
          <ViewState
            defaultCurrentDate= {Date.now()}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />


          <WeekView
            startDayHour={13}
            endDayHour={23}
            // intervalCount={7}
            
          />
          <Appointments />
          <Resources
            data={resources}
            mainResourceName="members"
          />

          <IntegratedEditing />

          <AppointmentTooltip showOpenButton />
          <AppointmentForm />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
