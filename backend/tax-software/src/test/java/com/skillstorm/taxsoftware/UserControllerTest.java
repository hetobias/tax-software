package com.skillstorm.taxsoftware;

import com.skillstorm.taxsoftware.controller.UserController;
import com.skillstorm.taxsoftware.model.User;
import com.skillstorm.taxsoftware.service.UserService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void createUser_whenUserIsValid_shouldReturnisOk() throws Exception {
    // GIVEN
    User user = new User();
    user.setFirstName("John");
    user.setLastName("Doe");

    // WHEN
    mockMvc.perform(post("/api/users")
            .contentType("application/json")
            .content("{\"firstName\":\"John\",\"lastName\":\"Doe\"}"))
            .andExpect(status().isOk());
}

    @Test
    public void getAllUsers_shouldReturnAllUsers() throws Exception {
        // GIVEN
        User user1 = new User();
        user1.setId("1");
        user1.setFirstName("John");
        user1.setLastName("Doe");

        User user2 = new User();
        user2.setId("2");
        user2.setFirstName("Jane");
        user2.setLastName("Smith");

        List<User> users = Arrays.asList(user1, user2);

        when(userService.getAllUsers()).thenReturn(users);

        // WHEN
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().json("[{'id':'1','firstName':'John','lastName':'Doe'},{'id':'2','firstName':'Jane','lastName':'Smith'}]"));
    }

    @Test
    public void getUserById_shouldReturnUserById() throws Exception {
        // GIVEN
        User user = new User();
        user.setId("1");
        user.setFirstName("John");
        user.setLastName("Doe");

        when(userService.getUserById(user.getId())).thenReturn(Optional.of(user));

        // WHEN
        mockMvc.perform(get("/api/users/1"))
                .andExpect(status().isOk())
                .andExpect(content().json("{'id':'1','firstName':'John','lastName':'Doe'}"));
    }

    @Test
    public void getUserById_whenUserDoesNotExist_shouldReturnisOk() throws Exception {
        // GIVEN
        String id = "1";
        when(userService.getUserById(id)).thenReturn(Optional.empty());
    
        // WHEN
        mockMvc.perform(get("/api/users/{id}", id))
                .andExpect(status().isOk());
    }

    @Test
    public void updateUser_whenUserExists_shouldReturnUpdatedUser() throws Exception {
        // GIVEN
        String id = "1";
        User user = new User();
        user.setId(id);
        user.setFirstName("John");
        user.setLastName("Doe");

        when(userService.getUserById(id)).thenReturn(Optional.of(user));
        when(userService.updateUser(user)).thenReturn(user);

        // WHEN
        mockMvc.perform(put("/api/users/{id}", id)
                .contentType("application/json")
                .content("{\"id\":\"1\",\"firstName\":\"John\",\"lastName\":\"Doe\"}"))
                .andExpect(status().isOk())
                .andExpect(content().json("{'id':'1','firstName':'John','lastName':'Doe'}"));
    }

    @Test
    public void deleteUser_whenUserExists_shouldReturnisOk() throws Exception {
        // GIVEN
        String id = "1";

        when(userService.existsById(id)).thenReturn(true);
        Mockito.doNothing().when(userService).deleteUser(id);

        // WHEN
        mockMvc.perform(delete("/api/users/{id}", id))
                .andExpect(status().isOk());
    }

}
