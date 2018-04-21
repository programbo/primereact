import React = require("react");

type Orientation = "horizontal" | "vertical"
type SliderValue = number | [number, number]

interface SliderProps {
    id?: string
    value?: SliderValue
    animate?: boolean
    min?: number
    max?: number
    orientation?: Orientation
    step?: number
    range?: boolean
    style?: React.CSSProperties
    className?: string
    onChange: ({ originalEvent: Event, value: SliderValue }) => void
}

export class Slider extends React.Component<SliderProps, any> {}
