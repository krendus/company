import React from 'react'

const Profile = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Account Information</h2>
          <div>
            <div>
              <h3>Account Info</h3>
            </div>
            <div>
              <div>
                <div>
                  <label>First Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" />
                </div>
                <div>
                  <label>Title</label>
                  <input type="text" />
                </div>
              </div>
              <div>
                <div>
                  <p>Email</p>
                  <p>bryce@axamo.co</p>
                </div>
                <button>
                  <span>Change Email</span>
                </button>
              </div>
              <div>
                <p>Password</p>
                <button>
                  <span>Change Password</span>
                </button>
              </div>
              <div>
                <p>Profile</p>
                <select>
                  <option value="Bryce Heyer">Bryce Heyer</option>
                  <option value="John Doe">John Doe</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Notification Settings</h3>
          <div>
            <div>
              <h3>Notification Settings</h3>
            </div>
            <div>
              <div>
                <button><span></span></button>
                <div>
                  <p>Instant Notifications</p>
                  <p>Receive a notification email everytime a data request is completed</p>
                </div>
              </div>
              <div>
                <p>Free Data Credit Reminder Notifications</p>
                <p>Turn on toggle to receive credit usage updates in your inbox.</p>
                <div>
                  <button><span></span></button>
                  <p>Receive free data credit reminder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Credits</h3>
        <div>
          <div>
            <p><span>Credits usage </span><span>|</span> Aug 10, 2023 - Sep 10, 2023</p>
            <p><span>Plan will renew: </span>Sep 10, 2023 3:00 AM</p>
          </div>
          <div>

            <h2>Export credits usage</h2>
            <p><span>48</span><span> of 349</span> export credits / mo</p>
            <div>
              <div>
                <div></div>
              </div>
              <button>Buy more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
