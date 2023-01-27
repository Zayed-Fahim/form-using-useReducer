import React, { useReducer } from "react";
import { initialState, reducer } from "../State/useReducer";

const LongForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
    e.target.reset();
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-auto">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between"
        onSubmit={submit}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="border-2 p-2 rounded-lg"
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="border-2 p-2 rounded-lg"
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="border-2 p-2 rounded-lg"
            type="email"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Gender</h1>
          <div className="flex gap-3">
            <div>
              <input
                className="border-2 p-2 rounded-lg"
                type="radio"
                id="male"
                name="gender"
                value="male"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className="ml-2 text-lg" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input
                className="border-2 p-2 rounded-lg"
                type="radio"
                id="female"
                name="gender"
                value="female"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className="ml-2 text-lg" htmlFor="female">
                Female
              </label>
            </div>
            <div>
              <input
                className="border-2 p-2 rounded-lg"
                type="radio"
                id="other"
                name="gender"
                value="other"
                onClick={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
              <label className="ml-2 text-lg" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="education">
            Education
          </label>
          <select
            className="border-2 p-1 rounded-lg"
            name="education"
            id="education"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3">Number of PCs</label>
          <div className="flex justify-between items-center gap-2 ">
            <button
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10 "
              onClick={(e) =>
                dispatch({
                  type: "DECREASE",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
              disabled={state.quantity === 0}
            >
              -
            </button>
            <div className="border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300">
              <span className="text-lg">{state.quantity}</span>
            </div>
            <button
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10"
              onClick={(e) =>
                dispatch({
                  type: "INCREASE",
                  payload: { name: e.target.name, value: e.target.value },
                })
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            className="border-2 p-2 rounded-lg outline-none"
            name="feedback"
            id="feedback"
            cols="30"
            rows="4"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex  w-full max-w-xs">
            <input
              className="mr-3 border-2 p-2 rounded-lg"
              type="checkbox"
              name="terms"
              id="terms"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
            <label htmlFor="terms">I agree to terms and conditions</label>
          </div>
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
            disabled={!state.terms}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LongForm;
