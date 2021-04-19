import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus  status="SocialNetwork.exp"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SocialNetwork.exp");
    });
    test("tag span should be in component after render", () => {
        const component = create(<ProfileStatus  status="SocialNetwork.exp"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be on the page", () => {
        const component = create(<ProfileStatus  status="SocialNetwork.exp"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus  status="SocialNetwork.exp"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("SocialNetwork.exp");
    });
    test("input should be displayed in edit mode instead of span", () => {
        const component = create(<ProfileStatus  status="SocialNetwork.exp"/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        let input = root.findByType("input")
        expect(input.props.value).toBe("SocialNetwork.exp");
    });
    test("callback should be called ", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus  status="SocialNetwork.exp" updateStatus={mockCallback}/>);
        const instance = component.getInstance()
        instance.diactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});